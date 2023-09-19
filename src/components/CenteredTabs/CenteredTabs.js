import React from 'react';
import { Paper, Tab, Tabs, Box } from "@mui/material";

// 追加
const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            {children}
          </Box>
        )}
      </div>
    );
}

const CenteredTabs = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <Paper>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primaey"
                textColor="primary"
                centered
            >
                {props.labels.map(label => <Tab label={label} key={label}></Tab>)} {/* さっきの */}
            </Tabs>
        </Paper>

        {props.children.map((child, index) => 
            <TabPanel value={value} index={index} key={index}>{child}</TabPanel>)
        }
    </div>
  );
}

export default CenteredTabs
