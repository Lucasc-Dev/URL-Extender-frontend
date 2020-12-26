export default function Home() {
  return (
    <div id="container" >
      <header>
        <div className="header-text" >
          <h1>Enshort, expand or create a custom URL!</h1>

          <p>Convert an URL to a giant or tiny one!</p>
        </div>
      </header>

      <main>
        <form>
          <fieldset>
            <h2>Original URL</h2>

            <input type="text" />

            <h2>Custom name</h2>

            <input type="text" />
          </fieldset>

          <button type="submit">
            <h1>Create URL</h1>
          </button>
        </form>
      </main>
    </div>
  )
}
