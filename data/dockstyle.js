*{
  margin: 0;
  padding: 0;
  list-style: none;
}

.dock{
  text-align: center;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  font-size: 0;
/*   outline: 1px solid #f00; 測試用，檢查區塊範圍 */
}

.dock li{
  display: inline-block;
  position: relative;
  z-index: 1;
  width: 70px;
  height: 70px;
  transition: width .5s, height .5s;
  border-radius: 50%;
  overflow: hidden;
}

.dock img{
  width: 100%;
  height: 100%;
}

.dock li:hover{
  width: 128px;
  height: 128px;
}

.dock li.second{
  width: 100px;
  height: 100px;
}



