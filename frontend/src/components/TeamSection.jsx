// import  { useRef, useEffect } from "react";
// import { Github, Linkedin, Instagram, X, Star } from "lucide-react";

// const TeamMemberCard = ({
//   name,
//   designation,
//   image = "https://imgs.search.brave.com/Eilg9GnlDdJTDWPnLdHXeHruTuJ_5nBEOy6UviKr6bU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3Njb2xsZWN0aW9u/Lm5ldC93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wOC9Bbmlt/ZS1HaXJsLURQLTEw/MS5qcGc",
//   socials = {},
//   description,
// }) => {
//   return (
//     <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D0B4] border border-[#D5B895] rounded-2xl p-6 m-4 text-[#4A3F35] shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl flex-shrink-0 w-80">
//       <div className="mb-6 overflow-hidden rounded-xl relative group">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4A3F35]/70 opacity-80 z-10 group-hover:opacity-90 transition-opacity"></div>
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
//         />
//         <div className="absolute bottom-4 left-4 z-20 flex items-center">
//           <Star className="text-[#D4AF37] mr-2 fill-[#D4AF37]" />
//           <span className="text-white font-semibold tracking-wide">
//             {designation}
//           </span>
//         </div>
//       </div>
//       <div className="text-center">
//         <h3 className="text-2xl font-bold mb-2 text-[#8B4513] tracking-tight">
//           {name}
//         </h3>
//         <p className="text-[#6F5C3D] mb-4 italic">{description}</p>
//         <div className="flex justify-center space-x-6">
//           {Object.entries(socials).map(([platform, link]) => {
//             const socialIcons = {
//               github: (
//                 <Github className="w-7 h-7 text-[#4A3F35] hover:text-[#8B4513] transition-colors" />
//               ),
//               linkedin: (
//                 <Linkedin className="w-7 h-7 text-[#4A3F35] hover:text-[#8B4513] transition-colors" />
//               ),
//               instagram: (
//                 <Instagram className="w-7 h-7 text-[#4A3F35] hover:text-[#8B4513] transition-colors" />
//               ),
//               x: (
//                 <X className="w-7 h-7 text-[#4A3F35] hover:text-[#8B4513] transition-colors" />
//               ),
//             };

//             return (
//               <a
//                 key={platform}
//                 href={link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:scale-110 transition-transform"
//               >
//                 {socialIcons[platform]}
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// const TeamSection = () => {
//   const scrollerRef = useRef(null);

//   const teamCategories = [
//     {
//       category: "Leadership",
//       members: [
//         {
//           name: "Emma Rodriguez",
//           designation: "CEO",
//           image:
//             "https://imgs.search.brave.com/Eilg9GnlDdJTDWPnLdHXeHruTuJ_5nBEOy6UviKr6bU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3Njb2xsZWN0aW9u/Lm5ldC93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wOC9Bbmlt/ZS1HaXJsLURQLTEw/MS5qcGc",
//           description: "Visionary leader driving strategic innovation",
//           socials: {
//             linkedin: "https://linkedin.com",
//             x: "https://x.com",
//           },
//         },
//         {
//           name: "Michael Chen",
//           designation: "CTO",
//           designation: "CEO",
//           image:
//             "https://imgs.search.brave.com/Eilg9GnlDdJTDWPnLdHXeHruTuJ_5nBEOy6UviKr6bU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3Njb2xsZWN0aW9u/Lm5ldC93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wOC9Bbmlt/ZS1HaXJsLURQLTEw/MS5qcGc",
//           description: "Technical mastermind behind our cutting-edge solutions",
//           socials: {
//             github: "https://github.com",
//             linkedin: "https://linkedin.com",
//           },
//         },
//       ],
//     },
//     {
//       category: "Engineering",
//       members: [
//         {
//           name: "Sarah Kim",
//           designation: "Senior Developer",
//           image: "https://placehold.co/300x300",
//           description: "Full-stack wizard crafting elegant code solutions",
//           socials: {
//             github: "https://github.com",
//             linkedin: "https://linkedin.com",
//           },
//         },
//         {
//           name: "Alex Johnson",
//           designation: "DevOps Engineer",
//           image:
//             "https://imgs.search.brave.com/cE4PH-U1w21TmA7WzZN5N_ktMRiYQX7ifpe3bGQSDOE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDYwMzEy/OTUuanBn",
//           description: "Infrastructure guru ensuring seamless deployments",
//           socials: {
//             github: "https://github.com",
//             linkedin: "https://linkedin.com",
//           },
//         },
//       ],
//     },
//   ];

//   useEffect(() => {
//     const scroller = scrollerRef.current;
//     if (scroller) {
//       scroller.innerHTML += scroller.innerHTML;
//     }
//   }, []);

//   return (
//     <div className="bg-[#FDF5E6] text-[#4A3F35] py-16 overflow-hidden">
//       <div className="container mx-auto">
//         <h2 className="text-5xl font-bold text-center mb-16 text-[#8B4513] tracking-tight">
//           Our Extraordinary Team
//         </h2>
//         {teamCategories.map((category) => (
//           <div key={category.category} className="mb-16">
//             <h3 className="text-3xl font-semibold text-center text-[#6F5C3D] mb-10 tracking-wide">
//               {category.category}
//             </h3>
//             <div className="relative w-full overflow-hidden">
//               <div
//                 ref={scrollerRef}
//                 className="flex animate-infinite-scroll space-x-6"
//               >
//                 {category.members.map((member, index) => (
//                   <TeamMemberCard key={index} {...member} />
//                 ))}
//                 {category.members.map((member, index) => (
//                   <TeamMemberCard key={`repeat-${index}`} {...member} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes infinite-scroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-infinite-scroll {
//           animation: infinite-scroll 20s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TeamSection;
// import "../index.css";
// import { useRef, useEffect } from "react";
// import { Github, Linkedin, Instagram, X, Star } from "lucide-react";
// import PropTypes from "prop-types"; // Import PropTypes for validation

// const TeamMemberCard = ({
//   name,
//   designation,
//   image = "https://imgs.search.brave.com/Eilg9GnlDdJTDWPnLdHXeHruTuJ_5nBEOy6UviKr6bU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3Njb2xsZWN0aW9u/Lm5ldC93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wOC9Bbmlt/ZS1HaXJsLURQLTEw/MS5qcGc",
//   socials = {},
//   description,
// }) => {
//   return (
//     <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D0B4] border border-[#D5B895] rounded-2xl p-6 m-4 text-[#4A3F35] shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl flex-shrink-0 w-80">
//       <div className="mb-6 overflow-hidden rounded-xl relative group">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4A3F35]/70 opacity-80 z-10 group-hover:opacity-90 transition-opacity"></div>
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
//         />
//         <div className="absolute bottom-4 left-4 z-20 flex items-center">
//           <Star className="text-[#D4AF37] mr-2 fill-[#D4AF37]" />
//           <span className="text-white font-semibold tracking-wide">
//             {designation}
//           </span>
//         </div>
//       </div>
//       <div className="text-center">
//         <h3 className="text-2xl font-bold mb-2 text-[#8B4513] tracking-tight">
//           {name}
//         </h3>
//         <p className="text-[#6F5C3D] mb-4 italic">{description}</p>
//         <div className="flex justify-center space-x-6">
//           {Object.entries(socials).map(([platform, link]) => {
//             const socialIcons = {
//               github: (
//                 <Github className="w-7 h-7 text-[#4A3F35] hover:text-[#8B4513] transition-colors" />
//               ),
//               linkedin: (
//                 <Linkedin className="w-7 h-7 text-[#4A3F35] hover:text-[#8B4513] transition-colors" />
//               ),
//               instagram: (
//                 <Instagram className="w-7 h-7 text-[#4A3F35] hover:text-[#8B4513] transition-colors" />
//               ),
//               x: (
//                 <X className="w-7 h-7 text-[#4A3F35] hover:text-[#8B4513] transition-colors" />
//               ),
//             };

//             return (
//               <a
//                 key={platform}
//                 href={link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:scale-110 transition-transform"
//               >
//                 {socialIcons[platform]}
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// // PropTypes validation for TeamMemberCard
// TeamMemberCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   designation: PropTypes.string.isRequired,
//   image: PropTypes.string,
//   socials: PropTypes.object,
//   description: PropTypes.string.isRequired,
// };

// const TeamSection = () => {
//   const scrollerRef = useRef(null);

//   const teamCategories = [
//     {
//       category: "Leadership",
//       members: [
//         {
//           name: "Emma Rodriguez",
//           designation: "CEO",
//           image:
//             "https://imgs.search.brave.com/Eilg9GnlDdJTDWPnLdHXeHruTuJ_5nBEOy6UviKr6bU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3Njb2xsZWN0aW9u/Lm5ldC93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wOC9Bbmlt/ZS1HaXJsLURQLTEw/MS5qcGc",
//           description: "Visionary leader driving strategic innovation",
//           socials: {
//             linkedin: "https://linkedin.com",
//             x: "https://x.com",
//           },
//         },
//         {
//           name: "Michael Chen",
//           designation: "CTO",
//           image:
//             "https://imgs.search.brave.com/Eilg9GnlDdJTDWPnLdHXeHruTuJ_5nBEOy6UviKr6bU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3Njb2xsZWN0aW9u/Lm5ldC93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wOC9Bbmlt/ZS1HaXJsLURQLTEw/MS5qcGc",
//           description: "Technical mastermind behind our cutting-edge solutions",
//           socials: {
//             github: "https://github.com",
//             linkedin: "https://linkedin.com",
//           },
//         },
//       ],
//     },
//     {
//       category: "Engineering",
//       members: [
//         {
//           name: "Sarah Kim",
//           designation: "Senior Developer",
//           image: "https://placehold.co/300x300",
//           description: "Full-stack wizard crafting elegant code solutions",
//           socials: {
//             github: "https://github.com",
//             linkedin: "https://linkedin.com",
//           },
//         },
//         {
//           name: "Alex Johnson",
//           designation: "DevOps Engineer",
//           image:
//             "https://imgs.search.brave.com/cE4PH-U1w21TmA7WzZN5N_ktMRiYQX7ifpe3bGQSDOE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDYwMzEy/OTUuanBn",
//           description: "Infrastructure guru ensuring seamless deployments",
//           socials: {
//             github: "https://github.com",
//             linkedin: "https://linkedin.com",
//           },
//         },
//       ],
//     },
//   ];

//   useEffect(() => {
//     const scroller = scrollerRef.current;
//     if (scroller) {
//       scroller.innerHTML += scroller.innerHTML;
//     }
//   }, []);

//   return (
//     <div className="bg-[#FDF5E6] text-[#4A3F35] py-16 overflow-hidden">
//       <div className="container mx-auto">
//         <h2 className="text-5xl font-bold text-center mb-16 text-[#8B4513] tracking-tight">
//           Our Extraordinary Team
//         </h2>
//         {teamCategories.map((category) => (
//           <div key={category.category} className="mb-16">
//             <h3 className="text-3xl font-semibold text-center text-[#6F5C3D] mb-10 tracking-wide">
//               {category.category}
//             </h3>
//             <div className="relative w-full overflow-hidden">
//               <div
//                 ref={scrollerRef}
//                 className="flex animate-infinite-scroll space-x-6"
//               >
//                 {category.members.map((member, index) => (
//                   <TeamMemberCard key={index} {...member} />
//                 ))}
//                 {category.members.map((member, index) => (
//                   <TeamMemberCard key={`repeat-${index}`} {...member} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes infinite-scroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-infinite-scroll {
//           animation: infinite-scroll 20s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TeamSection;

import "../index.css";
import { useRef, useEffect } from "react";
import { Github, Linkedin, Instagram, X, Star } from "lucide-react";
import PropTypes from "prop-types"; // Import PropTypes for validation

const TeamMemberCard = ({
  name,
  designation,
  image = "https://imgs.search.brave.com/Eilg9GnlDdJTDWPnLdHXeHruTuJ_5nBEOy6UviKr6bU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3Njb2xsZWN0aW9u/Lm5ldC93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wOC9Bbmlt/ZS1HaXJsLURQLTEw/MS5qcGc",
  socials = {},
  description,
}) => {
  return (
    <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D0B4] border border-[#D5B895] rounded-2xl p-6 m-4 text-[#4A3F35] shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl flex-shrink-0 w-80">
      <div className="mb-6 overflow-hidden rounded-xl relative group">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4A3F35]/70 opacity-80 z-10 group-hover:opacity-90 transition-opacity"></div>
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4 z-20 flex items-center">
          <Star className="text-[#D4AF37] mr-2 fill-[#D4AF37]" />
          <span className="text-white font-semibold tracking-wide">
            {designation}
          </span>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2 text-[#8B4513] tracking-tight">
          {name}
        </h3>
        <p className="text-[#6F5C3D] mb-4 italic">{description}</p>
        <div className="flex justify-center space-x-6">
          {Object.entries(socials).map(([platform, link]) => {
            const socialIcons = {
              github: (
                <Github className="w-7 h-7 text-[#4A3F35] hover:text-[#8B4513] transition-colors" />
              ),
              linkedin: (
                <Linkedin className="w-7 h-7 text-[#4A3F35] hover:text-[#8B4513] transition-colors" />
              ),
              instagram: (
                <Instagram className="w-7 h-7 text-[#4A3F35] hover:text-[#8B4513] transition-colors" />
              ),
              x: (
                <X className="w-7 h-7 text-[#4A3F35] hover:text-[#8B4513] transition-colors" />
              ),
            };

            return (
              <a
                key={platform}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                {socialIcons[platform]}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// PropTypes validation for TeamMemberCard
TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  image: PropTypes.string,
  socials: PropTypes.object,
  description: PropTypes.string.isRequired,
};

const TeamSection = () => {
  const scrollerRef = useRef(null);

  const teamCategories = [
    {
      category: "Leadership",
      members: [
        {
          name: "Emma Rodriguez",
          designation: "CEO",
          image:
            "https://imgs.search.brave.com/Eilg9GnlDdJTDWPnLdHXeHruTuJ_5nBEOy6UviKr6bU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3Njb2xsZWN0aW9u/Lm5ldC93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wOC9Bbmlt/ZS1HaXJsLURQLTEw/MS5qcGc",
          description: "Visionary leader driving strategic innovation",
          socials: {
            linkedin: "https://linkedin.com",
            x: "https://x.com",
          },
        },
        {
          name: "Michael Chen",
          designation: "CTO",
          image:
            "https://imgs.search.brave.com/Eilg9GnlDdJTDWPnLdHXeHruTuJ_5nBEOy6UviKr6bU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3Njb2xsZWN0aW9u/Lm5ldC93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wOC9Bbmlt/ZS1HaXJsLURQLTEw/MS5qcGc",
          description: "Technical mastermind behind our cutting-edge solutions",
          socials: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
          },
        },
      ],
    },
    {
      category: "Engineering",
      members: [
        {
          name: "Sarah Kim",
          designation: "Senior Developer",
          image: "https://placehold.co/300x300",
          description: "Full-stack wizard crafting elegant code solutions",
          socials: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
          },
        },
        {
          name: "Alex Johnson",
          designation: "DevOps Engineer",
          image:
            "https://imgs.search.brave.com/cE4PH-U1w21TmA7WzZN5N_ktMRiYQX7ifpe3bGQSDOE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDYwMzEy/OTUuanBn",
          description: "Infrastructure guru ensuring seamless deployments",
          socials: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
          },
        },
      ],
    },
  ];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller) {
      scroller.innerHTML += scroller.innerHTML;
    }
  }, []);

  return (
    <div className="bg-[#FDF5E6] text-[#4A3F35] py-16 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-[#8B4513] tracking-tight">
          Our Extraordinary Team
        </h2>
        {teamCategories.map((category) => (
          <div key={category.category} className="mb-16">
            <h3 className="text-3xl font-semibold text-center text-[#6F5C3D] mb-10 tracking-wide">
              {category.category}
            </h3>
            <div className="relative w-full overflow-hidden">
              <div
                ref={scrollerRef}
                className="flex animate-infinite-scroll space-x-6"
              >
                {category.members.map((member, index) => (
                  <TeamMemberCard key={index} {...member} />
                ))}
                {category.members.map((member, index) => (
                  <TeamMemberCard key={`repeat-${index}`} {...member} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
