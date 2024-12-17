const Card = ({ name, img, description, tech, url }) => {
    return (
      <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img
          src={img}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-3 text-red-400">{name}</h2>
          <p className="text-zinc-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item, index) => (
              <span
                key={index}
                className="bg-zinc-700 text-xs text-red-300 py-1 px-2 rounded"
              >
                {item}
              </span>
            ))}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 transition-colors duration-200 font-semibold"
          >
            View Code →
          </a>
        </div>
      </div>
    );
  };
  
  export default Card;
  