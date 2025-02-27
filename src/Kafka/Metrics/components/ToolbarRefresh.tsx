import { Button, Spinner, ToolbarItem } from "@patternfly/react-core";
import SyncAltIcon from "@patternfly/react-icons/dist/esm/icons/sync-alt-icon";
import { VoidFunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { FormatDate } from "../../../shared";

export type ToolbarRefreshProps = {
  isRefreshing: boolean;
  lastUpdated: Date | undefined;
  ariaLabel: string;
  onRefresh: () => void;
};

export const ToolbarRefresh: VoidFunctionComponent<ToolbarRefreshProps> = ({
  isRefreshing,
  lastUpdated = new Date(),
  ariaLabel,
  onRefresh,
}) => {
  const { t } = useTranslation(["metrics"]);

  return (
    <>
      <ToolbarItem>
        <Button variant="plain" aria-label={ariaLabel} onClick={onRefresh}>
          {isRefreshing ? (
            <span className="pf-c-button__progress">
              <Spinner size="md" />
            </span>
          ) : (
            <SyncAltIcon />
          )}
        </Button>
      </ToolbarItem>
      <ToolbarItem
        alignment={{ default: "alignRight" }}
        style={{ color: "var(--pf-global--Color--200)" }}
      >
        <div className="pf-u-font-size-xs">
          {isRefreshing ? (
            t("metrics:refreshing")
          ) : (
            <>
              {t("metrics:last-refresh")}
              <br />
              <FormatDate date={lastUpdated} format="distanceToNow" />
              {t("metrics:last-refresh-distance")}
            </>
          )}
        </div>
      </ToolbarItem>
    </>
  );
};
