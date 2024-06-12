import React from "react";
import styled from "styled-components";

import { ButtonLink, Text } from ".";

import { IFeaturingArtist } from "../types";
import ROUTES from "../routes";

interface FeaturingRowProps {
  featuring: IFeaturingArtist[];
}

const FeaturingRow = ({ featuring }: FeaturingRowProps) => {
  return featuring.length >= 1 ? (
    <FeaturingRowWrapper>
      <Text>
        Feat.{" "}
        {featuring.map((artist, index) => (
          <React.Fragment key={index}>
            {" "}
            <ButtonLink
              to={`${ROUTES.artists}/${artist.artistId}`}
              label={artist.artistName}
              active
            />
          </React.Fragment>
        ))}
      </Text>
    </FeaturingRowWrapper>
  ) : null;
};

const FeaturingRowWrapper = styled.div``;

export default FeaturingRow;
