import React from "react"
import styled from "styled-components"

const Icons = styled.section`
  margin-top: 25px;
`

const Link = styled.a`
  margin: 10px;
  color: #2096f3;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0) 1px,
    #ffff 1px,
    #ffff 2px,
    rgba(0, 0, 0, 0) 2px
  );
`

export default function SNS({
  github,
  gitcoin,
  email,
  linkedin,
  twitter,
  telegram,
}) {
  return (
    <Icons>
      {github ? (
        <Link
          target="_blank"
          rel="canonical"
          aria-label="Github"
          href="https://github.com/rossneilson"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-github"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#2096f3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </Link>
      ) : null}

      {twitter ? (
        <Link
          target="_blank"
          rel="canonical"
          aria-label="Twitter"
          href="https://twitter.com/RossNeilson_dev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#2096f3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
          </svg>
        </Link>
      ) : null}

      {email ? (
        <Link
          target="_blank"
          rel="canonical"
          aria-label="Email me"
          href="mailto:me@rossneilson.dev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#2096f3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
        </Link>
      ) : null}

      {telegram ? (
        <Link
          target="_blank"
          rel="canonical"
          aria-label="Telegram"
          href="https://t.me/rossneilson"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#2096f3"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="10" y1="14" x2="21" y2="3" />
            <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
          </svg>
        </Link>
      ) : null}

      {linkedin ? (
        <Link
          target="_blank"
          rel="canonical"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/ross-neilson-99b62b14a/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#2096f3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
        </Link>
      ) : null}

      {gitcoin ? (
        <Link
          target="_blank"
          rel="canonical"
          aria-label="Gitcoin"
          href="https://gitcoin.co/rossneilson"
        >
          <svg
            style={{ margin: "0px -8px 0px -5px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 68 68"
            height="60"
            width="60"
          >
            <switch>
              <g>
                <path
                  d="M44.5 41.3c0 2.7-.9 5.3-2.5 7.3l-4.6-3.4a6.5 6.5 0 00.7-7.3l4.1-3.8c1.4 2.1 2.3 4.6 2.3 7.2z"
                  fill="#fff"
                />
                <path
                  d="M45.6 56.3V60H32.7v-.1a18.9 18.9 0 01-18.9-18.8c0-7 3.8-13.1 9.5-16.3v6.7c0 .8.7 1.5 1.6 1.5s1.6-.7 1.6-1.5v-8.2c1.2-.4 2.5-.7 3.9-.9l2.3-.1h.9c4 .2 7.7 1.6 10.8 4.1L35.1 35c-.9-.5-2-.7-3.1-.7a6.8 6.8 0 000 13.6l1.7-.2 2.1 1.5z"
                  fill="#fff"
                />
                <path
                  d="M48.5 41.3a16 16 0 01-3.3 9.7l-.8-.6-2.4-1.8c1.6-2.1 2.5-4.7 2.5-7.3s-.8-5.1-2.4-7.1l1.4-1.3 1.6-1.4c2.2 2.7 3.4 6.1 3.4 9.8z"
                  fill="#f5b547"
                />
                <circle cx="32" cy="41.1" fill="#eff4ee" r="2.7" />
                <path
                  d="M44.4 50.4L42 48.6l-4.6-3.4a6.5 6.5 0 00.7-7.3l4.1-3.8 1.4-1.3 1.6-1.4 4-3.7 1.3-1.3-1.5-1.5a22.7 22.7 0 00-15.3-6.7v-3c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6v3.1c-1.3.1-2.6.4-3.9.7v-3.8c0-.9-.7-1.5-1.6-1.5s-1.6.7-1.6 1.5v5A23 23 0 0031.8 64h18.1v-9.7L45.2 51zm-9.7-9.3c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7 2.7 1.2 2.7 2.7zM45.6 60H32.7v-.1a18.9 18.9 0 01-18.9-18.8c0-7 3.8-13.1 9.5-16.3v6.7c0 .8.7 1.5 1.6 1.5s1.6-.7 1.6-1.5v-8.2c1.2-.4 2.5-.7 3.9-.9l2.3-.1h.9c4 .2 7.7 1.6 10.8 4.1L35.1 35c-.9-.5-2-.7-3.1-.7a6.8 6.8 0 000 13.6l1.7-.2 2.1 1.5 9.9 7.2V60z"
                  fill="#2096f3"
                />
                <g fill="#f5b547">
                  <path d="M44.6 8l1-1 1 1-1 1z" />
                  <circle cx="53" cy="1.3" r="1.3" />
                  <path d="M51 15.9l1.7-1.7 1.6 1.7-1.6 1.6z" />
                </g>
              </g>
            </switch>
          </svg>
        </Link>
      ) : null}
    </Icons>
  )
}
