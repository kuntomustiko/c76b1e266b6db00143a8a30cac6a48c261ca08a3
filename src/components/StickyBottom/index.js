import React from 'react';
import Icon from '@mdi/react';
import { mdiCartOutline, mdiChevronRight } from '@mdi/js';

import { useSelector } from 'react-redux';

function StickyBottom() {
  const reduxDisplay = useSelector(
    (state) => state.modalAddOpenReducer.display
  );
  const reduxPosition = useSelector(
    (state) => state.modalAddOpenReducer.position
  );
  const reduxMargin = useSelector((state) => state.modalAddOpenReducer.margin);
  const reduxWidth = useSelector((state) => state.modalAddOpenReducer.width);

  return (
    <div
      className="stickybottom"
      style={{
        display: reduxDisplay,
        position: reduxPosition,
        margin: reduxMargin,
        width: reduxWidth,
      }}>
      <div className="stickybottom-left">
        <p className="stickybottom-left__top">
          5 Items
          <span> | </span>
          Rp 125,000
        </p>
        <p className="stickybottom-left__bottom">Termasuk ongkos kirim</p>
      </div>
      <div className="stickybottom-right">
        <Icon path={mdiCartOutline} size={1.3} color="white" />
        <Icon path={mdiChevronRight} size={1.2} color="white" />
      </div>
    </div>
  );
}

export default StickyBottom;
