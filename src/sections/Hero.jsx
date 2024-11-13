// // import { Element, Link as LinkScroll } from "react-scroll";
// // import Button from "../components/Button.jsx";

// // const Hero = () => {
// //   return (
// //     <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
// //       <Element name="hero">
// //         <div className="container">
// //           <div className="relative z-2 max-w-512 max-lg:max-w-388">
// //             <div className="caption small-2 uppercase text-p3">
// //               Video Editing
// //             </div>
// //             <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
// //               Amazingly simple
// //             </h1>
// //             <p className="max-w-440 mb-14 body-1 max-md:mb-10">
// //               We designed XORA AI Video Editor to be an easy to use, quick to
// //               learn, and surprisingly powerful.
// //             </p>
// //             <LinkScroll to="features" offset={-100} spy smooth>
// //               <Button icon="/images/zap.svg">Try it now</Button>
// //             </LinkScroll>
// //           </div>

// //           <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
// //             <img
// //               src="/images/hero2.jpg"
// //               className="size-1230 max-lg:h-auto"
// //               alt="hero"
// //             />
// //           </div>
// //         </div>
// //       </Element>
// //     </section>
// //   );
// // };

// // export default Hero;

// import { Element, Link as LinkScroll } from "react-scroll";
// import Button from "../components/Button.jsx";

// const Hero = () => {
//   return (
//     <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
//       <Element name="hero">
//         <div className="container">
//           <div className="relative z-2 max-w-512 max-lg:max-w-388">
//             <div className="caption small-2 uppercase text-p3">
//               FullStack BU
//             </div>
//             <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
//               Code Create Conquoer
//             </h1>
//             <p className="max-w-440 mb-14 body-1 max-md:mb-10">
//               We are Dedicate to providing Back to the community, to learn to
//               teach and to contribute
//             </p>
//             <LinkScroll to="features" offset={-100} spy smooth>
//               <Button> Take me to Events</Button>
//             </LinkScroll>
//           </div>
//           <div className="absolute inset-0 w-full h-full bg-black opacity-40 pointer-events-none" />
//           <div className="absolute inset-0 w-full h-full pointer-events-none hero-img_res">
//             <img
//               src="/images/hero2.jpg"
//               className="w-full h-full object-cover"
//               alt="hero"
//             />
//           </div>
//         </div>
//       </Element>
//     </section>
//   );
// };

// export default Hero;

import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative w-full h-screen pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container relative z-2">
          <div className="relative z-10 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              FullStack BU
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Code Create Conquer
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We are Dedicated to providing back to the community, to learn,
              teach, and contribute.
            </p>
            <LinkScroll to="Events" offset={-100} spy smooth>
              <Button>Take me to Events</Button>
            </LinkScroll>
          </div>
        </div>

        {/* Background Image (Desktop) */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-black opacity-40 pointer-events-none hidden md:block"
          style={{ backgroundImage: 'url("/images/hero2.jpg")' }}
        />

        {/* Background Image (Mobile) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none md:hidden">
          <img
            src="/images/hero2.jpg"
            className="w-full h-full object-cover object-center"
            alt="hero"
          />
        </div>
      </Element>
    </section>
  );
};

export default Hero;
