import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import { TransitionProps } from "@mui/material/transitions";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem, TreeItemProps } from "@mui/x-tree-view/TreeItem";
import { useSpring, animated } from "@react-spring/web";

function TransitionComponent(props: TransitionProps) {
  const style = useSpring({
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

const CustomTreeItem = React.forwardRef(
  (props: TreeItemProps, ref: React.Ref<HTMLLIElement>) => (
    <TreeItem
      {...props}
      slots={{ groupTransition: TransitionComponent, ...props.slots }}
      ref={ref}
    />
  )
);

export const NetworkMenu: React.FC = () => {
  return (
    <Box sx={{ minHeight: 352, minWidth: 250, padding: 2 }}>
      <SimpleTreeView defaultExpandedItems={["all-nodes"]}>
        <CustomTreeItem itemId="all-nodes" label="Todos los Nodos">
          <CustomTreeItem itemId="firewalls" label="Firewalls">
            <CustomTreeItem
              itemId="firewall-1"
              label="Firewall - Cisco ASA 5506"
            />
            <CustomTreeItem
              itemId="firewall-2"
              label="Firewall - Palo Alto PA-220"
            />
          </CustomTreeItem>

          <CustomTreeItem itemId="routers" label="Routers">
            <CustomTreeItem itemId="router-1" label="Router - Cisco ISR 4321" />
            <CustomTreeItem itemId="router-2" label="Router - Juniper MX204" />
          </CustomTreeItem>

          <CustomTreeItem itemId="switches" label="Switches">
            <CustomTreeItem
              itemId="switch-1"
              label="Switch - Cisco Catalyst 2960"
            />
            <CustomTreeItem itemId="switch-2" label="Switch - HP Aruba 2930F" />
          </CustomTreeItem>

          <CustomTreeItem itemId="services" label="Servicios">
            <CustomTreeItem
              itemId="service-1"
              label="Servicio Web - Apache HTTP Server"
            />
            <CustomTreeItem itemId="service-2" label="Servicio Web - Nginx" />
            <CustomTreeItem itemId="service-3" label="Servicio DNS - BIND9" />
          </CustomTreeItem>

          <CustomTreeItem itemId="databases" label="Bases de Datos">
            <CustomTreeItem itemId="database-1" label="Base de Datos - MySQL" />
            <CustomTreeItem
              itemId="database-2"
              label="Base de Datos - PostgreSQL"
            />
            <CustomTreeItem
              itemId="database-3"
              label="Base de Datos - Microsoft SQL Server"
            />
          </CustomTreeItem>

          <CustomTreeItem itemId="servers" label="Servidores">
            <CustomTreeItem
              itemId="server-1"
              label="Servidor - Windows Server 2019"
            />
            <CustomTreeItem
              itemId="server-2"
              label="Servidor - Ubuntu 20.04 LTS"
            />
          </CustomTreeItem>
        </CustomTreeItem>
      </SimpleTreeView>
    </Box>
  );
};
