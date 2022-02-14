<?php

namespace KozakGroup\Theme\Plugin\Theme\Block\Html;

use Magento\Review\Model\ResourceModel\Review\Collection;
use Magento\Theme\Block\Html\Pager as Subject;

class Pager
{
    const PAGER_LIMIT = 5;

    /**
     * @param Subject $subject
     * @param $collection
     */
    public function beforeSetCollection(Subject $subject, $collection)
    {
        if ($collection instanceof Collection) {
            $subject->setLimit(self::PAGER_LIMIT);
        }
    }
}
