import React from "react";

import styles from "./index.module.css";
import { Image } from "react-bootstrap";

import QUESTIONICON from "../../../assets/whyKamala/question.svg";
import MONITORICON from "../../../assets/whyKamala/monitor.svg";
import CHECKICON from "../../../assets/whyKamala/check.svg";

const WhyKamala = () => {
  return (
    <div className={`${styles.container} section-padding my-5`}>
      <div className="mb-4">
        <h3 className="h-3 text-center">Why the Kamala High School</h3>
        <p className="text-center p-1 fw-medium light-black">
          Education with Purpose, Success with Passion
        </p>
      </div>
      <div className={`${styles.content}`}>
        <p className="p-2 light-black text-left">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit.
        </p>
        <p className="p-2 light-black text-left">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit.
        </p>
      </div>

      <div
        className={`${styles.cards} d-flex align-items-center justify-content-center flex-wrap  gap-4`}
      >
        <Card title={"Why the Kamal?"} img={QUESTIONICON} />
        <Card title={"Curriculum"} img={MONITORICON} />
        <Card title={"Advantages"} img={CHECKICON} />
      </div>
    </div>
  );
};

export default WhyKamala;

const Card = ({ img, title }) => {
  return (
    <div className={`${styles.card}  mt-4`}>
      <div className="d-flex align-items-center gap-4">
        <div
          className={`${styles.img} d-flex align-items-center justify-content-center`}
        >
          <Image src={img} alt="" />
        </div>
        <h5 className="h-5 light-black">{title}</h5>
      </div>
      <div className="p-2">
        <p className="px-3 pb-2 light-black text-left">
          Lorem ipsum dolor sit amet, ipsum sit consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, ipsum sit consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, ipsum sit consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, ipsum sit consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, ipsum sit consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, ipsum sit consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};
