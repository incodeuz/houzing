import React from "react";
import Input from "../Generic/Input";
import { Container } from "./style";
import Buttona from "../Generic/Button";
import { ReactComponent as HomeLogo } from "../../assets/icons/Vector.svg";
import { ReactComponent as Lupa } from "../../assets/icons/lupa.svg";
import { ReactComponent as Advanced } from "../../assets/icons/Group.svg";
import { Popover } from "antd";

const Filter = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "0 130px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Input
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
          height={"44px"}
          width={"100%"}
        >
          <HomeLogo />
        </Input>
        <Popover
          placement="bottomRight"
          content={
            <Container.Modal>
              <div>
                <Container.ModalTitle>Adress</Container.ModalTitle>
                <Container.ModalFlex>
                  <Input pl={"15px"} placeholder={"Country"} width={"200px"} />
                  <Input pl={"15px"} placeholder={"Region"} width={"200px"} />
                  <Input pl={"15px"} placeholder={"City"} width={"200px"} />
                  <Input pl={"15px"} placeholder={"Zip Code"} width={"200px"} />
                </Container.ModalFlex>
              </div>
              <div>
                <Container.ModalTitle>Apartment info</Container.ModalTitle>
                <Container.ModalFlex>
                  <Input pl={"15px"} placeholder={"Rooms"} width={"200px"} />
                  <Input pl={"15px"} placeholder={"Size"} width={"200px"} />
                  <Input pl={"15px"} placeholder={"Sort"} width={"200px"} />
                </Container.ModalFlex>
              </div>
              <div>
                <Container.ModalTitle>Price</Container.ModalTitle>
                <Container.ModalFlex>
                  <Input
                    pl={"15px"}
                    placeholder={"Min price"}
                    width={"200px"}
                  />
                  <Input
                    pl={"15px"}
                    placeholder={"Max price"}
                    width={"200px"}
                  />
                </Container.ModalFlex>
              </div>
            </Container.Modal>
          }
          trigger="click"
        >
          <Buttona type={"secondary"} width={"131px"} height={"44px"}>
            <Advanced style={{ marginRight: "10px" }} />
            Advanced
          </Buttona>
        </Popover>
        <Buttona type={"primary"} width={"180px"} height={"44px"}>
          <Lupa style={{ marginRight: "10px" }} />
          Search
        </Buttona>
      </Container>
    </div>
  );
};

export default Filter;
