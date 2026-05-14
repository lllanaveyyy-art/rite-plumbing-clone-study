import { chromium } from 'playwright';
import { writeFile, mkdir } from 'node:fs/promises';
const outR='docs/research/riteplumbingnyc.com';
const outS='docs/design-references/riteplumbingnyc.com';
await mkdir(outR,{recursive:true}); await mkdir(outS,{recursive:true});
const browser=await chromium.launch({headless:true});
async function inspect(width,height,name){
 const page=await browser.newPage({viewport:{width,height}, deviceScaleFactor:1, ignoreHTTPSErrors:true});
 await page.goto('https://riteplumbingnyc.com/',{waitUntil:'networkidle',timeout:60000});
 await page.screenshot({path:`${outS}/${name}-full-page.png`, fullPage:true});
 const data=await page.evaluate(()=>{
  const get=(el)=>{const s=getComputedStyle(el); const r=el.getBoundingClientRect(); return {tag:el.tagName, id:el.id, cls:el.className?.toString(), text:(el.textContent||'').replace(/\s+/g,' ').trim().slice(0,400), x:r.x,y:r.y,w:r.width,h:r.height, display:s.display, position:s.position, font:s.fontFamily, fs:s.fontSize, fw:s.fontWeight, color:s.color, bg:s.backgroundColor, bgImg:s.backgroundImage, margin:s.margin, padding:s.padding, radius:s.borderRadius}};
  return {
    title:document.title,
    meta:[...document.querySelectorAll('meta')].map(m=>({name:m.getAttribute('name'),property:m.getAttribute('property'),content:m.getAttribute('content')})),
    links:[...document.querySelectorAll('link')].map(l=>({rel:l.rel,href:l.href,type:l.type,as:l.as})),
    text:document.body.innerText,
    assets:{images:[...document.images].map(img=>({src:img.currentSrc||img.src, alt:img.alt, width:img.naturalWidth,height:img.naturalHeight, rect:img.getBoundingClientRect().toJSON?.()||{}})), bg:[...document.querySelectorAll('*')].map(el=>({el:el.tagName, cls:el.className?.toString(), bg:getComputedStyle(el).backgroundImage})).filter(x=>x.bg && x.bg!=='none')},
    sections:[...document.querySelectorAll('header, nav, main, section, footer, [class*="section"], [id]')].slice(0,120).map(get),
    headings:[...document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,a,button')].slice(0,220).map(get),
  };
 });
 await writeFile(`${outR}/${name}-inspection.json`, JSON.stringify(data,null,2));
 await writeFile(`${outR}/${name}-text.txt`, data.text);
 await page.close();
}
await inspect(1440,1200,'desktop');
await inspect(390,1000,'mobile');
await browser.close();
