import { NavLink } from '@remix-run/react';

import links from './_links';

export default function Tabs() {
  return (
    <nav className="mb-12 text-xl font-medium text-gray-400 border-b border-gray-200 w-fit">
      <ul className="flex -mb-px overflow-x-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400">
        {links.map((link) => (
          <li className="flex-shrink-0 mr-2" key={`tab-link-${link.to}`}>
            <NavLink
              className={({ isActive }) =>
                `inline-block p-4 border-b-2 border-transparent ${
                  isActive
                    ? 'text-blue-900 border-blue-900'
                    : 'hover:text-gray-600 hover:border-gray-300'
                }`
              }
              to={link.to}
              prefetch="intent"
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
