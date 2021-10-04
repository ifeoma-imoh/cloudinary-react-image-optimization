import { Cloudinary } from "@cloudinary/url-gen";
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from "@cloudinary/react";
// import { fill } from "@cloudinary/url-gen/actions/resize";
import { Effect } from "@cloudinary/url-gen/actions/effect";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { byAngle } from "@cloudinary/url-gen/actions/rotate";
const cld = new Cloudinary({
  cloud: {
    cloudName: "ifeomaimoh",
  },
});
const App = () => {
  const file =
    "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  let image = cld.image(file);
  image = image.setDeliveryType("fetch");
  image = image
    .effect(Effect.sepia())
    // .resize(fill().height(500).width(490))
    .roundCorners(byRadius().radius(40))
    .rotate(byAngle(20))
    .quality("q_40");

  // This gives the full delivery URL of the tranformations applied above.
  console.log({ url: image.toURL() });

  return (
    <div style={{ margin: "5rem" }}>
      <h1 style={{ marginBottom: "50rem" }}>scroll to lazy load </h1>
      <AdvancedImage
        cldImg={image}
        plugins={[lazyload("0", 1), responsive(200), placeholder("blur")]}
      />
    </div>
  );
};
export default App;
