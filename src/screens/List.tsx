import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import { Heading, ReleaseCard, TrackRow } from "../components";

import { fetchPendingReleases, fetchUpcomingReleases } from "../api";
import { ITrack, IListRelease } from "../types";

const List = () => {
  const [pendingList, setPendingList] = useState<IListRelease[]>();
  const [upcomingList, setUpcomingList] = useState<IListRelease[]>();
  const {
    data: pendingReleasesData,
    isLoading: pendingReleasesIsLoading,
    error: pendingReleasesError,
  } = useQuery({
    queryKey: ["pendingReleases"],
    queryFn: fetchPendingReleases,
  });
  const {
    data: upcomingReleasesData,
    isLoading: upcomingReleasesIsLoading,
    error: upcomingReleasesError,
  } = useQuery({
    queryKey: ["upcomingReleases"],
    queryFn: fetchUpcomingReleases,
  });
  useEffect(() => {
    pendingReleasesData && setPendingList(pendingReleasesData);
    upcomingReleasesData && setUpcomingList(upcomingReleasesData);
  }, [pendingReleasesData, upcomingReleasesData]);

  if (pendingReleasesIsLoading || upcomingReleasesIsLoading) {
    return <div>Loading...</div>;
  }

  if (
    pendingReleasesError ||
    upcomingReleasesError ||
    !pendingList ||
    !upcomingList
  ) {
    return <div>Error!</div>;
  }

  return (
    <ListWrapper>
      <Heading>Releases</Heading>
      <ReleasesWrapper>
        <PendingListWrapper>
          <Heading size="h3">Pending</Heading>
          {pendingList.map((release) => (
            <React.Fragment key={release._id}>
              <ReleaseCard release={release} />
              {release.tracks.map((track: ITrack, index: number) => (
                <TrackRow
                  track={track}
                  key={track.number}
                  border={index !== release.tracks.length - 1}
                />
              ))}
            </React.Fragment>
          ))}
        </PendingListWrapper>
        <UpcomingListWrapper>
          <Heading size="h3">Upcoming</Heading> {}
          {upcomingList.map((release) => (
            <ReleaseCard key={release._id} release={release} />
          ))}
        </UpcomingListWrapper>
      </ReleasesWrapper>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.margin.default};
`;

const ReleasesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ theme }) => theme.margin.default};
`;

const PendingListWrapper = styled.div``;

const UpcomingListWrapper = styled.div``;

export default List;
