import { MdDiscount, MdOutlinePayments } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import Carousel from 'better-react-carousel'
import "./Slide.css";

const Slide = () => {

  const infos = [
    {
      title: "Parcelamos em até 3x sem juros*",
      icon: <MdOutlinePayments size={50} className="icon" />,
    },
    {
      title: "Enviamos para todo o Brasil",
      icon: <TbTruckDelivery size={50} className="icon" />,
    },
    {
      title: "5% de desconto no boleto",
      icon: <MdDiscount size={50} className="icon" />,
    },
  ];

  return (
    <div className="slider">
        <Carousel cols={1} rows={1} gap={0} loop>
            <Carousel.Item>
                <img width="100%" src="/media/carrossel1.png" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="/media/carrossel2.png" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="/media/carrossel3.png" />
            </Carousel.Item>
        </Carousel>
        <section className="info">
            {infos.map((info) => {
            const { title, icon } = info;
            return (
                <div className="infoDiv" key={title}>
                    <div className="iconInfo">{icon}</div>
                    <div>
                        <h3>{title}</h3>
                    </div>
                </div>
            );
        })}
        </section>
    </div>
  );
};

export default Slide;