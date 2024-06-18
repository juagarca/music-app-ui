import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import { ReleaseCard } from "../components";

import { fetchUpcomingReleases } from "../api";
import { IRelease } from "../types";

const List = () => {
  const [upcomingList, setUpcomingList] = useState<IRelease[]>();

  const {
    data: upcomingReleasesData,
    isLoading: upcomingReleasesIsLoading,
    error: upcomingReleasesError,
  } = useQuery({
    queryKey: ["upcomingReleases"],
    queryFn: fetchUpcomingReleases,
  });
  useEffect(() => {
    upcomingReleasesData && setUpcomingList(upcomingReleasesData);
  }, [upcomingReleasesData]);

  if (upcomingReleasesIsLoading) {
    return <div>Loading...</div>;
  }

  if (upcomingReleasesError || !upcomingList) {
    return <div>Error!</div>;
  }

  return (
    <UpcomingWrapper>
      <UpcomingListWrapper>
        {upcomingList.map((release) => (
          <ReleaseCard key={release._id} release={release} />
        ))}
      </UpcomingListWrapper>
    </UpcomingWrapper>
  );
};

const UpcomingWrapper = styled.div`
  width: 496px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.margin.default};
`;

const UpcomingListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default List;
