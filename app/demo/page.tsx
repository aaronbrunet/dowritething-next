'use client'
import { Center, Timeline, Text } from '@mantine/core';

export default function Page({wordcounts}){
    return (
        <Timeline active={0}>
            {wordcounts.map(w => (
             <Timeline.Item title={`${w.count} words`} key={w.id}>
                {/* <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text> */}
                <Text size="xs" mt={4}>{w.date}</Text>
            </Timeline.Item>
            ))}
        </Timeline>
    )
}