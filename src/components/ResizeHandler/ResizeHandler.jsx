import clsx from 'clsx';
import styles from './ResizeHandler.module.scss';
import { forwardRef } from 'react';

const rootClass = clsx(
  'react-resizable-handle',
  'react-resizable-handle-e',
  styles['resize-handler'],
);

function ResizeHandler(props, ref) {
  return <div {...props} ref={ref} className={rootClass} />;
}

export default forwardRef(ResizeHandler);
