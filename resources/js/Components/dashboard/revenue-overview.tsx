import React from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/Components/ui/card";
import {Bar, BarChart, ResponsiveContainer, XAxis, YAxis} from "recharts";

const RevenueOverview = () => {
    const revenueData = [
        {name: 'Jan', total: 4000},
        {name: 'Feb', total: 3000},
        {name: 'Mar', total: 5000},
        {name: 'Apr', total: 7000},
        {name: 'May', total: 6000},
        {name: 'Jun', total: 8000},
    ]

    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={revenueData}>
                        <XAxis
                            dataKey="name"
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `$${value}`}
                        />
                        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]}/>
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}

export default RevenueOverview;
