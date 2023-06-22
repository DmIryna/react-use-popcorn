import { useState } from "react"
import PropTypes from "prop-types"
import Star from "./Star"

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
}

const starContainerStyle = {
  display: "flex",
}

const StarRating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  message = [],
  defaultRating = 0,
  onSetRating,
}) => {
  const [rating, setRating] = useState(defaultRating)
  const [hoverRating, setHoverRating] = useState(0)

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  }

  const handleSetRating = (rating) => {
    setRating(rating)
    onSetRating(rating)
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={hoverRating ? hoverRating >= i + 1 : rating >= i + 1}
            onRate={() => handleSetRating(i + 1)}
            onHoverIn={() => setHoverRating(i + 1)}
            onHoverOut={() => setHoverRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {message.length === maxRating
          ? message[hoverRating ? hoverRating - 1 : rating - 1]
          : hoverRating || rating || ""}
      </p>
    </div>
  )
}

StarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  message: PropTypes.array,
  defaultRating: PropTypes.number,
}

export default StarRating
