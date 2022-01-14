import React from 'react';
import { useHistory } from 'react-router-dom';

interface IProps {
  to: any;
  children: any;
  disabled: boolean;
  title: string;
  // any other props that come into the component
}
/*
 **
 * Link able to be enabled/disabled
 * @param param0 - {
 *      to: "link for item"
 *      disabled: true if link is disabled
 *      props: {
 *          title: Title of item,
 *          children: Child items to include in span
 *      }
 * }
 */
export default function ConditionalNavLink({ to, disabled, ...props }: IProps) {
  let history = useHistory();
  if (disabled) {
    return (
      <span className="disabled" title={props.title}>
        {props.children}
      </span>
    );
  }
  return (
    <span
      title={props.title}
      onClick={() => {
        history.push(to);
      }}
    >
      {props.children}
    </span>
  );
}
