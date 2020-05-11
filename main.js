function render (container, message) {
  container.innerHTML = `<p>${message}</p>`
}

(async function () {

  const app = document.getElementById('app')

  let about = await fetch('content/about.json')
  let { message } = await about.json()

  render(app, message)

  const nav = document.createElement('nav')

  app.appendChild(nav)
  render(nav, `change this at the <a href="admin">admin</a>`)
})()
