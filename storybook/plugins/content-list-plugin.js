export default function contentListPlugin(){
  const manifest = {}
  function buildManifest(){
    const fs = require('fs')
    const path = require('path')
    const ROOT = process.cwd()
    const bases = [path.resolve(ROOT, '..', '..', 'assets')]
    for (const base of bases){
      if (!fs.existsSync(base)) continue
      const dirs = fs.readdirSync(base, { withFileTypes: true }).filter((d)=> d.isDirectory()).map((d)=> d.name)
      for (const key of dirs){
        const dir = path.join(base, key)
        const files = fs.readdirSync(dir)
        const images = []
        const audios = []
        const videos = []
        for (const f of files){
          const ext = path.extname(f).toLowerCase()
          const url = `${f}`
          if (['.png','.jpg','.jpeg','.gif','.webp'].includes(ext)) images.push(url)
          else if (['.mp3','.wav','.aac','.m4a','.ogg'].includes(ext)) audios.push(url)
          else if (['.mp4','.webm','.mov','.avi','.mkv'].includes(ext)) videos.push(url)
        }
        manifest[key] = { key, audio: audios, video: videos, image: images }
      }
    }
  }
  buildManifest()
  return {
    name: 'content-list-plugin',
    resolveId(id){ if(id==='virtual:content-list') return id; return null; },
    load(id){ if(id==='virtual:content-list'){ return 'export const items = ' + JSON.stringify(manifest) + ';' } return null; }
  }
}
