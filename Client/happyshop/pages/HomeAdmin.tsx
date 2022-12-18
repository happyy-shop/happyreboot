import Link from "next/link";
import React from "react";
export default function HomeAdmin() {
  return (
    <div>
     <li className="active">
                <Link href='/AllProductAdmin' >AllProductAdmin</Link>
              </li>
              <li className="active">
                <Link href='/jeansadmin' >jeansadmin</Link>
              </li>
              <li className="active">
                <Link href='/shoesadmin' >shoesadmin</Link>
              </li>
              <li className="active">
                <Link href='/T-SHIRTadmin' >T-SHIRTadmin</Link>
              </li>
    </div>
  );
}
