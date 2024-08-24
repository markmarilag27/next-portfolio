export default function TopNavigation() {
  const links = [
    {
      text: 'About',
      target: '_self',
      href: '#about',
    },
    {
      text: 'Github',
      target: '_blank',
      href: 'https://github.com/markmarilag27',
    },
    {
      text: 'Linkedin',
      target: '_blank',
      href: 'https://www.linkedin.com/in/sayefmarilag',
    }
  ];

  return (
    <nav className="fixed flex justify-between items-center top-0 left-0 right-0 px-4 py-3">
      <a href="/" className="relative w-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M371.84 437L371.343 228.26L268.961 400.222H232.68L130.795 232.733V437H55.251V89.1H121.849L252.063 305.295L380.289 89.1H446.39L447.384 437H371.84Z"
              fill="#FFC75A"
            />
            <path
              d="M379.84 432L379.343 223.26L276.961 395.222H240.68L138.795 227.733V432H63.251V84.1H129.849L260.063 300.295L388.289 84.1H454.39L455.384 432H379.84Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="100%" height="100%" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>

      <ul className="relative flex">
        {links.map((link, index) =>
        <li key={index} className="text-white font-sm tracking-wider ml-6">
          <a href={link.href} target={link.target}>{ link.text }</a>
        </li>
        )}
      </ul>
    </nav>
  );
}
