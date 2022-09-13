import { NavLink } from "@remix-run/react";

export default function Tabs() {
  return (
    <nav className="mb-12 text-xl font-medium text-gray-400 border-b border-gray-200 w-fit">
      <ul className="flex -mb-px overflow-x-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400">
        <li className="flex-shrink-0 mr-2">
          <NavLink
            className={({ isActive }) =>
              `inline-block p-4 border-b-2 border-transparent ${
                isActive
                  ? "text-blue-900 border-blue-900"
                  : "hover:text-gray-600 hover:border-gray-300"
              }`
            }
            to="MultipleChoices"
            prefetch="intent"
          >
            Multiple Choices
          </NavLink>
        </li>

        <li className="flex-shrink-0 mr-2">
          <NavLink
            className={({ isActive }) =>
              `inline-block p-4 border-b-2 border-transparent ${
                isActive
                  ? "text-blue-900 border-blue-900"
                  : "hover:text-gray-600 hover:border-gray-300"
              }`
            }
            to="TrueFalse"
            prefetch="intent"
          >
            True or False
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
