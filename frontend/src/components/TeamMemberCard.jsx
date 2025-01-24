import PropTypes from "prop-types";
import { Github, Linkedin, Instagram, X } from "lucide-react";

const TeamMemberCard = ({
  name,
  designation,
  image = null,
  socials = {},
  description,
}) => {
  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-white/5 p-6 hover:bg-white/10 transition-all duration-300
                    animate-fade-up opacity-0 transform translate-y-8"
    >
      <div className="aspect-square mb-4 overflow-hidden rounded-lg">
        <img
          src={image || "https://www.w3schools.com/w3images/team1.jpg"}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-purple-400 font-medium mb-3">{designation}</p>
        <p className="text-gray-300 text-sm mb-4">{description}</p>

        <div className="flex justify-center gap-4">
          {socials?.github && (
            <a
              href={socials.github}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {socials?.linkedin && (
            <a
              href={socials.linkedin}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {socials?.instagram && (
            <a
              href={socials.instagram}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          )}
          {socials?.x && (
            <a
              href={socials.x}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string.isRequired,
  socials: PropTypes.shape({
    github: PropTypes.string,
    linkedin: PropTypes.string,
    instagram: PropTypes.string,
    x: PropTypes.string,
  }),
};

export default TeamMemberCard;
