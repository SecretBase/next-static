import React from "react"
import Head from "next/head"

import Link from "../components/Link"

export default () => (
  <>
    <Head>
      <title>This is my static site</title>
    </Head>
    <h1>Hello World</h1>
    <nav>
      <ul>
        <li>
          <Link href="/about-me">
            <a>About me</a>
          </Link>
        </li>
      </ul>
    </nav>
  </>
)
