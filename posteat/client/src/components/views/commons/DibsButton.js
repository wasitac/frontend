import React, { useState } from 'react'
import { Button } from 'antd'
import { PushpinOutlined, PushpinFilled } from "@ant-design/icons";

const DibsButton = () => {
  const [Dib, setDib] = useState([0, <PushpinOutlined />]);
  const [DibsCount, setDibsCount] = useState(0);
<<<<<<< HEAD
// db연동하고나면 다른 방법으로 바꾸기
=======
// hack: db연동하고나면 다른 방법으로 바꾸기
>>>>>>> 5842ca2622701758cc130ba6892ecdc3cc0ef7e7
  function dibsButtonClicked() {
    if (Dib[0] === 0) {
      setDib([1, <PushpinFilled />]);
      setDibsCount(DibsCount + 1);
    } else {
      setDib([0, <PushpinOutlined />]);
      setDibsCount(DibsCount - 1);
    }
  }
  return (
    
       <Button
        style={{ position: "absolute", zIndex: 1, top: "5px", right: "10px" }}
        onClick={dibsButtonClicked}
      >
        {DibsCount} {Dib[1]}
      </Button>
    
  )
}

export default DibsButton
