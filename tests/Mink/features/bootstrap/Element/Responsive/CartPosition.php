<?php

namespace Responsive;

class CartPosition extends \Emotion\CartPosition
{
    /**
     * @var array $selector
     */
    protected $selector = array('css' => 'div.table--row');

    public $cssLocator = array(
        'name' => 'div.table--content > a.content--title',
        'number' => 'div.table--content > p.content--sku',
        'thumbnailLink' => 'div.table--media > a.table--media-link',
        'thumbnailImage' => 'div.table--media > a.table--media-link > img'
    );
}