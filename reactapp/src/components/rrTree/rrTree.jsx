import { Card, CardContent } from "@mui/material";
import React from "react";
import './rrTree.scss';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import RRJson from './rr.json';


const RRTree = () => {
    const uniqueAccounts = RRJson.reduce((acc, cur) => {
        if (!acc.includes(cur.AccountName)) {
            acc.push(cur.AccountName);
        }
        return acc;
    }, []);



    return (
        <Card className="rr-card">
            <CardContent>
                <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}

                >
                    {
                        uniqueAccounts.map((account, index) => {
                            const accountData = RRJson.filter(item => item.AccountName === account);
                            const uniqueProjects = accountData.reduce((acc, cur) => {
                                if (!acc.includes(cur.ProjectName)) {
                                    acc.push(cur.ProjectName);
                                }
                                return acc;
                            }, []);

                            return (
                                <TreeItem nodeId={uniqueAccounts[index]} label={account} className="rr-tree-account">
                                    {
                                        uniqueProjects.map((project, index) => {
                                            const projectData = accountData.filter(item => item.ProjectName === project);
                                            return (
                                                <TreeItem nodeId={uniqueProjects[index]} label={project}>
                                                    {
                                                        projectData.map((rr, index) => {
                                                            return (
                                                                <TreeItem nodeId={projectData[index]} label={<div className="rr-tree-box">
                                                                    <span>{rr.rrNumber}</span>
                                                                    <span className="rr-tree-details">opened on {rr.LoggedTime}</span>
                                                                </div>}>
                                                                    {
                                                                        rr.Employee.map((emp, index) => {
                                                                            return (
                                                                                <TreeItem nodeId={emp[index]} label={emp.empName + ` [${emp.status}]`} className="rr-tree-details" />
                                                                            )
                                                                        })
                                                                    }

                                                                </TreeItem>
                                                            )
                                                        })
                                                    }
                                                </TreeItem>
                                            )
                                        })
                                    }

                                </TreeItem>)
                        })
                    }

                </TreeView>
            </CardContent>
        </Card>
    )
}
export default RRTree;