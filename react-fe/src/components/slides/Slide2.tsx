import * as React from 'react'

export default () => (
  <div className="container">
    <h1 className="title">
      Selenium is flakey
    </h1>

    <ul>
      <li>"Just run it again and it'll work"</li>
      <li>"Run it again and it'll work this time!"</li>
      <li><pre>.wait(2000)</pre></li>
      <li><pre>.wait(3000)</pre></li>
    </ul>
  </div>
)
