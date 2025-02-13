"use client";
import Accordion from './Accordion';

const page = () => {
    const items = [
        { title: 'Item 1', content: 'Content for item 1' },
        { title: 'Item 2', content: 'Content for item 2' },
        { title: 'Item 3', content: 'Content for item 3' },
        { title: 'Item 4', content: 'Content for item 4' },
    ];
  return (
    <>
        <h2>Tabs</h2>
        <Accordion items={items} />
    </>
  )
}

export default page