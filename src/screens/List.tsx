import React from "react";
import { useQuery } from "@tanstack/react-query";

import { ReleaseCard, TrackRow } from "../components";

import { fetchList } from "../api";
import { ITrack } from "../types";

const List = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["list"],
    queryFn: fetchList,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error!</div>;
  }

  return (
    <>
      {data.map((release) => (
        <React.Fragment key={release._id}>
          <ReleaseCard release={release} />
          {release.tracks.map((track: ITrack) => (
            <TrackRow track={track} key={track.number} border />
          ))}
        </React.Fragment>
      ))}
    </>
  );
};

export default List;
