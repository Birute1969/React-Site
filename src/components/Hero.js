import React from "react";
import {
    Section,
    Content,
    Left,
    Title,
    Description,
    Button
} from "./HeroStyled"

const Hero = () => {
    return (
        <Section>
            <Content>
                <Left>
                    <Title>
                        PRISIJUNK IR PAMATYSI <br/> KĄ SIŪLOME
                    </Title>
                    <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Description>
                    <Button href="https://bit.ly/webull-join">
                        <span>Prisijunk dabar</span>
                    </Button>
                    
                </Left>
            </Content>
        </Section>
    );
}

export default Hero