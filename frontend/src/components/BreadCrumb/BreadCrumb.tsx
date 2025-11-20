import React from "react";
import "./BreadCrumb.css";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface BreadCrumbItem {
  label: string;
  path: string;
}

interface BreadCrumbProps {
  items: BreadCrumbItem[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items }) => (
  <Breadcrumb>
    {items.map((item, idx) => (
      <Breadcrumb.Item
        key={item.path}
        linkAs={Link}
        linkProps={{ to: item.path }}
        active={idx === items.length - 1}
      >
        {item.label}
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
);

export default BreadCrumb;