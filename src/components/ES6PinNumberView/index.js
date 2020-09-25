import React from "react";
import map from "lodash/map";
import PropTypes from "prop-types";
import toString from "lodash/toString";
import { Row, Col } from "antd";
import { Wrapper, styles } from "./styles";

// ======================= PROPS
const PinNumberViewComponent = ({ pin, className }) => {
  // ======================= HELPERS
  const pins = map(toString(pin));

  // ======================= VIEWS
  if (pins.length === 0) {
    return null;
  }

  return (
    <>
      <Wrapper className={className}>
        <Row>
          {map(pins, (e, i) => (
            <Col key={`${e}-${i}`} flex="auto">
              {e}
            </Col>
          ))}
        </Row>
      </Wrapper>

      <div className="wrapping">
        This is normal styled-jsx styles, nested styles also working
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

PinNumberViewComponent.propTypes = {
  className: PropTypes.string,
  pin: PropTypes.string.isRequired
};

export const PinNumberView = PinNumberViewComponent;

export default PinNumberViewComponent;
