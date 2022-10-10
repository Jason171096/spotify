import {
  HomeIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div className="text-gray-500 py-5">
      <div className="space-y-3">
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
      
      <hr className="border-1"/>
      <div>
          <button className="flex items-center space-x-2 hover:text-white">
            <PlusCircleIcon className="w-5 h-5" />
            <p>Create Playlist</p>
          </button>
        </div>
        <div>
          <button className="flex items-center space-x-2 hover:text-white">
            <HeartIcon className="w-5 h-5" />
            <p>Like Songs</p>
          </button>
        </div>
        <div>
          <button className="flex items-center space-x-2 hover:text-white">
            <RssIcon className="w-5 h-5" />
            <p>Your episodes</p>
          </button>
        </div>
        <hr className="border-1"/>
        </div>
        
        {/* PlayList */}

        <div><p className="cursor-pointer hover:text-white">Playlist name...</p></div>
        
    </div>
  )
}

export { Sidebar };
