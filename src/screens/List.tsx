import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import { Heading, ListReleaseCard, ReleaseCard } from "../components";

import { fetchPendingReleases, fetchUpcomingReleases } from "../api";
import { IListRelease } from "../types";

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
      <ReleasesWrapper>
        <PendingListWrapper>
          <Heading size="h3">Pending</Heading>
          {pendingList.map((release) => (
            <React.Fragment key={release._id}>
              <ListReleaseCard release={release} />
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
  padding: ${({ theme }) => theme.margin.default};

  > :first-child {
    text-align: center;
  }
`;

const ReleasesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ theme }) => theme.margin.default};
`;

const PendingListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const UpcomingListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default List;
