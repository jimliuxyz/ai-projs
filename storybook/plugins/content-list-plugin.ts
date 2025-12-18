export default function contentListPlugin(): any {
  // Minimal no-op plugin to satisfy TS during development
  return {
    name: 'content-list-plugin',
    resolveId(id: string) {
      if (id === 'virtual:content-list') return id
      return null
    },
    load(id: string) {
      if (id === 'virtual:content-list') {
        return 'export const items = {}'
      }
      return null
    }
  }
}
