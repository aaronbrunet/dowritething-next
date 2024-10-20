'use client'
import { Center, Timeline, Text } from '@mantine/core';

export default function Page({}){
    const wordcounts = [
        {date:'now',count:50, id:1},
        {date:'not long ago',count:100, id:2},
        {date:'a while ago',count:37, id:3}
    ];
    return (
        <Timeline active={0}>
            {wordcounts.map(w => (
             <Timeline.Item title={`${w.count} words`} key={w.id}>
                <Text size="xs" mt={4}>{w.date}</Text>
            </Timeline.Item>
            ))}
        </Timeline>
    )
}