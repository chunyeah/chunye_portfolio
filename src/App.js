import React from 'react';
import { Text, Page, Link } from '@geist-ui/react';
import './App.css';

function App() {

  return (
    <Page size='small' style={{ padding: '0 0.66rem', background: '#fff' }}>
      <div>
        <Text style={{ textAlign: 'left', fontSize: '30px', fontWeight: '500' }} h2>
          chunye's blog
        </Text>
        <Text p>
          Hey there! I'm Chun Ye. I'm a developer at Shanghai, China.
        </Text>
        <Link block target='_blank' href='https://rainbow.me/chunye.eth'>
            chunye.eth
        </Link>
        <Link block target='_blank' href='https://petit.today'>
            Petit project
        </Link>
        <Link block color target='_blank' href='https://mirror.xyz/chunye.eth'>
          Mirror Blog
        </Link>
        <Link block target='_blank' href='https://github.com/chunyeah'>
          GitHub
        </Link>
        <Link block target='_blank' href='https://twitter.com/chunyeah'>
          Twitter
        </Link>
      </div>
    </Page>
  );
}

export default App;
