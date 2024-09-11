import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useComponentContext } from '../../../../../context/ComponentContext';
import { useSectorContext } from '../../../../../context/SectorContext';
import DashboardSector from '../dashboard-nav/dashboard-sector/DashboardSector';
import { fetchSectorInfo } from './../../../../../store/dashboard/dashboardSlice';
import styles from './DashboardContent.module.scss';

function DashboardContent({ docId }) {
  const { sectorInfo } = useSelector((state) => state.dashboardSlice);
  const { currComp } = useComponentContext();
  const { setSector } = useSectorContext();

  const dispatch = useDispatch();

  console.log();

  useEffect(() => {
    const collectionName = `dashboard/${docId}/sector`;
    dispatch(fetchSectorInfo(collectionName));
  }, [dispatch, docId]);

  useEffect(() => {
    if (!sectorInfo) {
      return;
    } else {
      const firstSector = sectorInfo.find((sector) => sector.id === 1);
      setSector(firstSector);
    }
  }, [sectorInfo, setSector]);

  return (
    <div className={styles.content}>
      <ul className={styles.sectorMenu}>
        {currComp !== 'Alert' &&
          [...sectorInfo]
            .sort((a, b) => a.id - b.id)
            .map((sector) => (
              <DashboardSector
                key={sector.id}
                id={sector.id}
                data={sector}
                className={styles.sectorItem}
              />
            ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default DashboardContent;
