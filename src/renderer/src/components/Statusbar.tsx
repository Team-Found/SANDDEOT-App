// import React from 'react';

export default function Statusbar({ title }: { title: string }): JSX.Element {
  return (
    <div className="h-9 bg-[#101010] border-primaryBd border-2 flex items-center drag justify-center">
      <div>{title}</div>
    </div>
  );
}
