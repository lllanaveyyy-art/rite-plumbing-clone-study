import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
const images = [
 ['logo.webp','https://riteplumbingnyc.com/wp-content/uploads/2023/05/rite-plumbing-nyc-logo.png.webp'],
 ['hero.jpg','https://riteplumbingnyc.com/wp-content/uploads/2023/02/fotor_2023-2-15_20_53_4.jpg'],
 ['service-plumber.jpg','https://riteplumbingnyc.com/wp-content/uploads/2023/02/Rite-Plumbing-20230204-021-scaled.jpg'],
 ['licensed-plumber.jpg','https://riteplumbingnyc.com/wp-content/uploads/2023/02/pic-scaled.jpg'],
 ['history.jpg','https://riteplumbingnyc.com/wp-content/uploads/2023/03/RitePlumbingTeam-Fesi-Toni-3-scaled.jpg'],
 ['document-plumber.jpg','https://riteplumbingnyc.com/wp-content/uploads/2023/02/Homepage1-scaled.jpg'],
 ['team.jpg','https://riteplumbingnyc.com/wp-content/uploads/2023/03/RitePlumbingTeam-3-1-croped-scaled.jpg'],
];
const seo = [
 ['favicon-32.png','https://riteplumbingnyc.com/wp-content/uploads/2023/02/cropped-RPH-LOGO-1-32x32.png'],
 ['apple-touch-icon.png','https://riteplumbingnyc.com/wp-content/uploads/2023/02/cropped-RPH-LOGO-1-180x180.png'],
 ['icon-192.png','https://riteplumbingnyc.com/wp-content/uploads/2023/02/cropped-RPH-LOGO-1-192x192.png'],
];
async function download(targetDir, files){
 await mkdir(targetDir,{recursive:true});
 for (const [name,url] of files){
  const res = await fetch(url);
  if(!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(path.join(targetDir,name), buf);
 }
}
await download('public/images/riteplumbing', images);
await download('public/seo/riteplumbing', seo);
