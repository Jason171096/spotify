import {
  HomeIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div>
      <div className="text-gray-500">
        <div>
          <button className="flex items-center space-x-2 hover:text-white">
            <HomeIcon className="w-5 h-5" />
            <p>Home</p>
          </button>
        </div>
        <div>
            
          <button className="flex items-center space-x-2 hover:text-white">
            <MagnifyingGlassIcon className="w-5 h-5" />
            <p>Search</p>
          </button>
        </div>
        <div>
          <button className="flex items-center space-x-2 hover:text-white">
            <BuildingLibraryIcon className="w-5 h-5" />
            <p>Your Library</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export { Sidebar };
