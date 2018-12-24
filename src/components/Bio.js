import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`tuo yang`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p style={{ maxWidth: 310 }}>
          <p>
            杨拓的个人博客.&nbsp;
          </p>
          {/* <a href="https://mobile.twitter.com/dan_abramov">Dan Abramov</a>. */}
          {' '}
          {/* I&nbsp;explain with words and code. */}
          写一些平时的收获
        </p>
      </div>
    )
  }
}

export default Bio
