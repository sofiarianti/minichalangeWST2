import Header from './pages/landing_page/header.js'
import Content from './pages/landing_page/content.js'

function App(container) {
  container.innerHTML = `
    <div id="header-root"></div>
    <div id="content-root"></div>
  `

  const headerRoot = container.querySelector('#header-root')
  const contentRoot = container.querySelector('#content-root')

  if (headerRoot) Header(headerRoot)
  if (contentRoot) Content(contentRoot)
}

export default App
