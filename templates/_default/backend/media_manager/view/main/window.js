/**
 * Shopware 4.0
 * Copyright © 2012 shopware AG
 *
 * According to our dual licensing model, this program can be used either
 * under the terms of the GNU Affero General Public License, version 3,
 * or under a proprietary license.
 *
 * The texts of the GNU Affero General Public License with an additional
 * permission and of our proprietary license can be found at and
 * in the LICENSE file you have received along with this program.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * "Shopware" is a registered trademark of shopware AG.
 * The licensing of the program under the AGPLv3 does not imply a
 * trademark license. Therefore any rights, title and interest in
 * our trademarks remain entirely with us.
 *
 * @category   Shopware
 * @package    MediaManager
 * @subpackage View
 * @copyright  Copyright (c) 2012, shopware AG (http://www.shopware.de)
 * @version    $Id$
 * @author shopware AG
 */

//{namespace name=backend/media_manager/view/main}

/**
 * Shopware UI - Media Manager Main Window
 *
 * This file contains the business logic for the User Manager module. The module
 * handles the whole administration of the backend users.
 */
//{block name="backend/media_manager/view/main/window"}
Ext.define('Shopware.apps.MediaManager.view.main.Window', {
	extend: 'Enlight.app.Window',
    title: '{s name=mainWindowTitle}Mediamanager{/s}',
    cls: Ext.baseCSSPrefix + 'media-manager-window',
    alias: 'widget.mediamanager-main-window',
    border: false,
    autoShow: true,
    layout: 'border',
    height: '90%',
    width: 1024,

    /**
     * Initializes the component and builds up the main interface
     *
     * @return void
     */
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'mediamanager-album-tree',
            store: me.albumStore
        }, {
            xtype: 'mediamanager-media-view',
            mediaStore: me.mediaStore
        }];

        me.callParent(arguments);
    }
});
//{/block}
