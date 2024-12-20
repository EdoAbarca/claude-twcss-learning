const BasicLayout = () => {
	{/*<!-- This div has padding (p-5), a border, and margin (m-2) --> */ }
	<div className="p-5 border m-2">
		Content
	</div>
}

//Fix
const Display = () => {

	{/*<!-- Block elements take full width and stack vertically --> */ }
	<div class="block w-full bg-blue-100 mb-2">
		I'm a block element
	</div>

	{/*<!-- Inline elements flow within text and only take needed space --> */ }

	<span class="inline bg-green-100">
		I'm inline
	</span>

	{/*<!-- Inline-block combines features of both --> */ }

	<div class="inline-block bg-yellow-100 p-2">
		I'm inline-block
	</div>

	{/* <!-- Flex container enables powerful layout control -->*/ }

	<div class="flex space-x-4">
		<div class="bg-red-100">Flex item 1</div>
		<div class="bg-red-200">Flex item 2</div>
	</div>

	{/*<!-- Grid container creates 2D layouts --> */ }

	<div class="grid grid-cols-3 gap-4">
		<div class="bg-purple-100">Grid item 1</div>
		<div class="bg-purple-200">Grid item 2</div>
		<div class="bg-purple-300">Grid item 3</div>
	</div>

}

const Positioning = () => {
	
	{/*<!-- Relative positioning - element remains in document flow --> */ }
	<div class="relative top-2 left-2 bg-blue-200">
		I'm relatively positioned
	</div>
	
	{/*<!-- Absolute positioning - removed from document flow --> */ }
	<div class="relative"> {/**<!-- Parent container --> */}
		<div class="absolute top-0 right-0 bg-red-200">
			I'm absolutely positioned to my relative parent
		</div>
	</div>

	{/*<!-- Fixed positioning - stays fixed relative to viewport --> */ }
	<div class="fixed bottom-4 right-4 bg-green-200">
		I'm fixed at the bottom-right corner
	</div>
}

const Fonts = () => {
	<div class="space-y-4">
		<h1 class="text-4xl font-bold tracking-tight">
			Large Title Text
		</h1>
		<p class="text-base leading-relaxed text-gray-600">
			Body text with comfortable line height and muted color
		</p>
		<span class="text-sm font-medium">
			Smaller, medium-weight text
		</span>
	</div>
}

const Card = ({ 
  title, 
  description, 
  imageSrc, 
  tags = [], 
  onClick 
}) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
      onClick={onClick}
    >
      {/* Image container with aspect ratio */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc || "/api/placeholder/400/320"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content area with consistent padding */}
      <div className="space-y-4 p-4">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900">
          {title}
        </h3>
        
        <p className="text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        {/* Tags with flexbox layout */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


const Fundamentals = () => {
	return (
		<div>
			<h1>Fundamentals</h1>
			<BasicLayout/>
			<Display/>
			<Positioning/>
			<Fonts/>
		</div>
	)
}

export default Fundamentals