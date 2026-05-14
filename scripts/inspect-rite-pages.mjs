import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
const base='https://riteplumbingnyc.com';
const paths=['/24-7-plumbing-services/','/bathroom-plumbing-shower-repair/','/clogged-toilet-repairs-installation/','/professional-drain-clogged-services/','/emergency-plumber-repair/','/faucet-fixture-sink-plumbing-and-installation/','/garbage-disposal-repair-and-replacement/','/gas-leak-repair-service/','/hot-water-heater-repair-installation/','/radiator-valve-repair-installation/','/sump-pump-installation-maintenance-repairs/','/tankless-water-heater-repair-installation/','/commercial-plumbing/','/residential-plumbing-services-repairs/','/blog/','/video/','/about-us/','/contact/'];
await mkdir('docs/research/riteplumbingnyc.com/pages',{recursive:true});
await mkdir('docs/design-references/riteplumbingnyc.com/pages',{recursive:true});
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000},ignoreHTTPSErrors:true});
await page.goto(base,{waitUntil:'networkidle'});
// try hover services and screenshot dropdown
await page.locator('text=Services').first().hover().catch(()=>{});
await page.screenshot({path:'docs/design-references/riteplumbingnyc.com/services-dropdown.png', fullPage:false});
const dropdown = await page.evaluate(()=>document.body.innerText);
await writeFile('docs/research/riteplumbingnyc.com/services-dropdown-text.txt', dropdown);
const results=[];
for (const p of paths){
 const pg=await browser.newPage({viewport:{width:1440,height:1000},ignoreHTTPSErrors:true});
 await pg.goto(base+p,{waitUntil:'networkidle', timeout:60000}).catch(async e=>{results.push({path:p,error:e.message}); await pg.close();});
 if (pg.isClosed()) continue;
 const slug=p.replaceAll('/','').replaceAll('-','_')||'home';
 await pg.screenshot({path:`docs/design-references/riteplumbingnyc.com/pages/${slug}.png`, fullPage:true}).catch(()=>{});
 const data=await pg.evaluate(()=>({
  url: location.href, title: document.title, h1:[...document.querySelectorAll('h1')].map(e=>e.textContent?.trim()), h2:[...document.querySelectorAll('h2')].slice(0,20).map(e=>e.textContent?.trim()), text: document.body.innerText,
  images:[...document.images].map(i=>({src:i.currentSrc||i.src,alt:i.alt,w:i.naturalWidth,h:i.naturalHeight})).filter(i=>i.src.startsWith('http')),
  bg:[...document.querySelectorAll('*')].map(el=>({cls:el.className?.toString(), bg:getComputedStyle(el).backgroundImage})).filter(x=>x.bg&&x.bg!=='none').slice(0,40)
 }));
 results.push({path:p,title:data.title,h1:data.h1,h2:data.h2,images:data.images,bg:data.bg});
 await writeFile(`docs/research/riteplumbingnyc.com/pages/${slug}.json`, JSON.stringify(data,null,2));
 await writeFile(`docs/research/riteplumbingnyc.com/pages/${slug}.txt`, data.text);
 await pg.close();
}
await writeFile('docs/research/riteplumbingnyc.com/pages-index.json', JSON.stringify(results,null,2));
await browser.close();
